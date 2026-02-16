declare global {
  interface Window {
    handleConsentUpdate?: (accepted: boolean) => void;
  }
}

export {};
