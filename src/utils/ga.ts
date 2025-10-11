import ReactGA from "react-ga4";

export const initGA = (trackingId: string) => {
  if (!window.GA_INITIALIZED) {
    ReactGA.initialize(trackingId);
    window.GA_INITIALIZED = true;
  }
};

export const logPageView = () => {
  ReactGA._gaCommandSendPageview(window.location.pathname + window.location.search, {});
};

export const setUserId = (id: string) => {
  if (id) {
      ReactGA.set({ userId: id });   
      logPageView();
  }
};
