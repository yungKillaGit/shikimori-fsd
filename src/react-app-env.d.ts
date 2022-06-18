/// <reference types="vite/client" />
import { FunctionComponent, ReactNode } from 'react';

declare global {
  type FCWithChildren<Props = {}> = FunctionComponent<{children: ReactNode;} & Props>;
}
