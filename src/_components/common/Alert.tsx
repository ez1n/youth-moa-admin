import { Button } from './Button';
import { Portal } from './Portal';

import { IcoErrorCircle, IcoSuccessCircle } from '../icons';

interface PropsType {
  message: string;
  onClick: () => void;
  type?: 'success' | 'error';
}

export function Alert(props: PropsType) {
  const { type = 'error', message, onClick } = props;
  const alertIcon = {
    success: <IcoSuccessCircle />,
    error: <IcoErrorCircle />,
  };

  return (
    // TODO: 애니메이션 추가
    <Portal portalId="alert">
      <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full p-5">
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-30" />

        <section
          className="relative overflow-hidden bg-white sm:w-fit h-fit rounded-xl md:min-w-96 flex flex-col items-center justify-center w-full px-6 py-5 max-w-[373px]"
          onClick={(e) => e.stopPropagation()}
        >
          {alertIcon[type]}

          <p className="mx-6 mt-4 mb-6 text-center md:mx-12">{message}</p>

          <Button onClick={onClick}>확인</Button>
        </section>
      </div>
    </Portal>
  );
}
