'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCookies } from 'react-cookie';
import { useSearchParams } from 'next/navigation';

import { SMContainer, SMTable, SMButton } from '@/components';
import { PullStatus } from '@/components/table/types';
import Connect from './connect';
import useSystemFunctions from '@/hooks/useSystemFunctions';
import { Network } from '@/config/privy/config';
import SMLoader from '@/components/loader';
import useUserActions from '@/application/user/actions';
import useMigrationActions from '@/application/migration/actions';
import { useChainId } from 'wagmi';
import { getScanLink } from '@/utils/helpers';
import { toast } from 'react-toastify';

const NetworkMigrationsView = ({ network }: { network: Network }) => {
  const { navigate, userState, migrationState, locale } = useSystemFunctions();
  const chaninId = useChainId();
  const { authenticateGithub } = useUserActions();
  const { getMigrationObject } = useMigrationActions();
  const searchParams = useSearchParams();
  const [cookies] = useCookies(['authtoken', 'isGithubConnected']);

  const { loading, user } = userState;
  const { migrations, loading: migration_loading } = migrationState;
  const { buttonText, subtitle, title } = locale.migrate;

  const code = searchParams.get('code');

  const tableData = migrations
    ?.filter?.((migration) => migration.chains?.find((chain) => chain.id === chaninId))
    .map((migration) => {
      const chain = migration.chains?.find((chain) => chain.id === chaninId);

      return {
        tokenIcon: migration.logo_url,
        tokenName: migration.name,
        pullStatus: migration?.status === 'processing' ? 'pending' : migration?.status === 'failed' ? 'failed' : ('merged' as PullStatus),
        id: migration.id,
        scanUrl: getScanLink(chain?.id!, chain?.transaction_hash!),
      };
    });

  const action = () => {
    if (!cookies.isGithubConnected) {
      return toast('Please connect your github', {
        type: 'info',
        autoClose: 7000,
      });
    }

    navigate.push(`/${network}/migrate/new`);
  };

  const handleTableAction = (id?: string) => {
    if (id) getMigrationObject(id);

    navigate.push(`/${network}/migrate/${id}`);
  };

  const handleGithubConnection = async () => {
    if (!code || loading) return;

    await authenticateGithub(code);
  };

  useEffect(() => {
    handleGithubConnection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  if (loading || migration_loading) {
    return (
      <div className="w-full h-[90vh] flex items-center justify-center">
        <SMLoader variant="medium" />
      </div>
    );
  }

  return (
    <div className="pb-10">
      <SMContainer>
        <motion.div className="mt-5 md:mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-col items-center gap-8 w-full">
            <Connect network={network} />

            <div className="self-stretch pb-5 border-b border-primary-1350 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-[14px] md:gap-8">
              <div className="flex-1 flex flex-col gap-1 items-start">
                <h1 className="text-[20px] md:text-[30px] text-primary-300 leading-[38px] font-medium">{title}</h1>
                <p className="text-[14px] text-primary-350 md:text-base max-w-[450px] text-wrap">{subtitle}</p>
              </div>

              {cookies.isGithubConnected && <SMButton onClick={action} text={buttonText} variant="new" network={network} />}
            </div>

            <SMTable isConnected={cookies.isGithubConnected ? true : false} data={tableData} network={network} ctaAction={handleTableAction} />
          </div>
        </motion.div>
      </SMContainer>
    </div>
  );
};

export default NetworkMigrationsView;
