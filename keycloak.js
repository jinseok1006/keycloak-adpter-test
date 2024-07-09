import Keycloak from "https://cdn.jsdelivr.net/npm/keycloak-js@25.0.1/+esm";

const keycloak = new Keycloak({
  url: "",
  realm: "test-realm",
  clientId: "keycloak-adapter-test",
});

const init = async () =>
  keycloak.init({
    onLoad: "check-sso",
  });

const logout = keycloak.logout;
const login = keycloak.login;
const loadUserProfile = keycloak.loadUserProfile;

export { keycloak,init, logout, login, loadUserProfile};

