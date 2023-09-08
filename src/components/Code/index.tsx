import CodeToken from './CodeToken';
import './index.css';

export const DefaultToken = ({ children }: { children: React.ReactNode }) => (
  <CodeToken type="default">{children}</CodeToken>
);

export const KeywordToken = ({ children }: { children: React.ReactNode }) => (
  <CodeToken type="keyword">{children}</CodeToken>
);

export const FunctionToken = ({ children }: { children: React.ReactNode }) => (
  <CodeToken type="function">{children}</CodeToken>
);

export const OperatorToken = ({ children }: { children: React.ReactNode }) => (
  <CodeToken type="operator">{children}</CodeToken>
);

export const ValueToken = ({ children }: { children: React.ReactNode }) => (
  <CodeToken type="value">{children}</CodeToken>
);

export const TypeToken = ({ children }: { children: React.ReactNode }) => <CodeToken type="type">{children}</CodeToken>;

export { default as CodeLine } from './CodeLine';
