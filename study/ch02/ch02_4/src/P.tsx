import type { FC, PropsWithChildren, ReactNode } from "react";

export type PProps = {}

const P: FC<PropsWithChildren<PProps>> = props => {
  return <p {...props} />;
}

export default P;

// PropsWithChildren 사용전
// export type PProps = {
//   children?: ReactNode | undefined;
// }
// const P: FC<PProps> = props => {
//   return <p {...props} />
// }
// export default P;
