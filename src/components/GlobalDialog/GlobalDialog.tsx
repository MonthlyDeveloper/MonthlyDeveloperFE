import {
  useGlobalDialogActions,
  useGlobalDialogValue,
} from "@atoms/globalDialogState";
import Dialog from "@components/Dialog";

function GlobalDialog() {
  const { close } = useGlobalDialogActions();
  const { onConfirm, onCancel, ...rest } = useGlobalDialogValue();

  const handleConfirm = () => {
    close();
    onConfirm();
  };

  const handleCancel = onCancel
    ? () => {
        close();
        onCancel();
      }
    : undefined;

  return <Dialog {...rest} onConfirm={handleConfirm} onCancel={handleCancel} />;
}

export default GlobalDialog;
