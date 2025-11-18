export async function estEnLigne(url: string): Promise<boolean> {
  try {
    const reponse = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: AbortSignal.timeout(6000),
    });
    return reponse.ok || (reponse.status >= 300 && reponse.status < 400);
  } catch {
    try {
      const dateDebut = Date.now();
      await fetch(url, {
        method: "GET",
        mode: "no-cors",
        redirect: "follow",
        signal: AbortSignal.timeout(6000),
      });
      const duree = Date.now() - dateDebut;

      if (duree < 100) {
        return false;
      }
      return true;
    } catch {
      return false;
    }
  }
}
