import { l as useState } from './server.mjs';

function useAuth() {
  const showSignIn = useState("signInModalOpen", () => false);
  const currentUser = useState("currentUser", () => null);
  useState("authHydrated", () => false);
  function openSignIn() {
    showSignIn.value = true;
  }
  function closeSignIn() {
    showSignIn.value = false;
  }
  function setUser(user) {
    currentUser.value = user;
    showSignIn.value = false;
  }
  function signOut() {
    currentUser.value = null;
  }
  function loadFromStorage() {
    return;
  }
  return { showSignIn, currentUser, openSignIn, closeSignIn, setUser, signOut, loadFromStorage };
}

export { useAuth as u };
//# sourceMappingURL=useAuth-BrvguvVt.mjs.map
