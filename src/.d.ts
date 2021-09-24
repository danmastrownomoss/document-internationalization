declare module 'part:@sanity/*';

declare module 'config:intl-input' {
  const config: import('./types').Ti18nConfig & {
    withTranslationsMaintenance?: boolean;
  };
  export default config;
}

declare module '@sanity/state-router/lib/RouterContext' {
  export const RouterContext: React.Context<{
    resolveIntentLink: (intentName: string, params?: Record<string, any> | [Record<string, any>, Record<string, any>]) => string;
  }>;
}

declare module '@sanity/desk-tool/lib/components/ConfirmDelete' {
  export const ConfirmDelete: React.FC<{
    draft?: import('@sanity/client').SanityDocument<any>;
    published?: import('@sanity/client').SanityDocument<any>;
    onCancel?: () => void;
    onConfirm?: () => void;
  }>;
  export default ConfirmDelete;
}

declare module '@sanity/desk-tool/lib/components/enhanceWithReferringDocuments' {
  export function enhanceWithReferringDocuments<P = {}>(component: React.ComponentType<P & {
    referringDocuments: Record<string, any>[]
    isCheckingReferringDocuments: boolean
    published?: import('@sanity/types').SanityDocument | null
  }>): React.ComponentType<P>;
}

declare module '@sanity/desk-tool/lib/components/DocTitle' {
  export const DocTitle: React.FunctionComponent<{
    document?: import('@sanity/types').SanityDocument | null
  }>
}

declare module '@sanity/state-router/lib/components/IntentLink' {
  const IntentLink: React.FC<{
    intent: string;
    params?: Record<string, any> | [Record<string, any>, Record<string, any>];
  } & React.HTMLProps<HTMLAnchorElement>>;
  export default IntentLink;
}

declare module '@sanity/desk-tool/lib/panes/documentPane/documentHistory/context' {
  export const DocumentHistoryContext: React.Context<{
    displayed: import('@sanity/client').SanityDocument<any> | null;
  }>;
}

declare module 'part:@sanity/base/schema' {
  const schemas: {
    _original: {
      types: import('./types').TSchema[];
    };
  };
  export default schemas;
}

declare module 'part:sanity-plugin-intl-input/languages/loader?' {
  type ILanguageObject = import('./types').ILanguageObject;
  type TLoaderFnResult = Promise<ILanguageObject[]> | ILanguageObject[];
  const loader: ((languages: ILanguageObject[], document?: import('@sanity/client').SanityDocument | null) => TLoaderFnResult) | undefined;
  export default loader;
}

declare module 'part:sanity-plugin-intl-input/languages/should-reload?' {
  const fn: (document?: import('@sanity/client').SanityDocument | null) => boolean;
  export default fn;
}

declare module '*.scss' {
    const c: { [key: string]: string; };
    export = c;
}

declare module '*.css' {
  const c: { [key: string]: string; };
  export = c;
}