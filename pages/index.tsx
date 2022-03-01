import type { NextPage } from "next";
import { useGlobalDialogActions } from "@atoms/globalDialogState";

const Home: NextPage = () => {
  const { open } = useGlobalDialogActions();
  const askLogout = () => {
    open({
      title: "Sign out",
      message: "Do you want to sign out?",
      onConfirm: () => {
        console.log("click!");
      },
      showCancel: true,
      cancelText: "No",
      confirmText: "Yes",
    });
  };

  return (
    <>
      <div>hello</div>
      <button type="button" onClick={askLogout}>
        modal
      </button>
    </>
  );
};

export default Home;
