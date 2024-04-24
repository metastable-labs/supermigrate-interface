const AuthorizeIcon = () => {
  return (
    <div
      className="flex items-center justify-center authorize-icon-color rounded-[6.667px] p-2 w-8 h-8"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "6.667px",
        padding: "8px",
        width: "32px",
        height: "32px",
        backgroundColor: "rgba(27, 162, 122, 0.1)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
      >
        <path
          d="M7.99961 1.60019L12.9298 2.69579C13.204 2.75699 13.3996 2.99999 13.3996 3.28139V9.27359C13.3996 10.4772 12.7978 11.6016 11.7964 12.2688L7.99961 14.8002L4.20281 12.2688C3.20081 11.601 2.59961 10.4772 2.59961 9.27419V3.28139C2.59961 2.99999 2.79521 2.75699 3.06941 2.69579L7.99961 1.60019ZM7.99961 2.82959L3.79961 3.76259V9.27359C3.79961 10.0758 4.20041 10.8252 4.86821 11.2704L7.99961 13.3584L11.131 11.2704C11.7988 10.8252 12.1996 10.0764 12.1996 9.27419V3.76259L7.99961 2.83019V2.82959ZM10.6708 5.93339L11.5198 6.78179L7.70141 10.6002L5.15561 8.05439L6.00401 7.20599L7.70081 8.90279L10.6708 5.93279V5.93339Z"
          fill="#34A853"
        />
      </svg>
    </div>
  );
};

export default AuthorizeIcon;
