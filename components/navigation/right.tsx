import NavAction from './nav-action';
import { INavActions } from './types';
import SMHam from '../ham';

const Right = ({
  menuOpen,
  toggleMenu,
  actionItems,
  handleModal,
}: {
  menuOpen: boolean;
  toggleMenu: () => void;
  actionItems: INavActions;
  handleModal: (variant: 'account' | 'wallet' | 'network') => void;
}) => {
  return (
    <div>
      <div className="hidden md:flex gap-4 items-center justify-center">
        {actionItems?.map((item, index) => (
          <NavAction key={index} onClick={() => handleModal(item.variant)} {...item} />
        ))}
      </div>

      <SMHam isOpen={menuOpen} onClick={toggleMenu} />
    </div>
  );
};

export default Right;
