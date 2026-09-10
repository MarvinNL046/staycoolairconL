import { Navigate,useLocation } from 'react-router-dom';

// Clientfallback voor previews; vercel.json verzorgt de permanente HTTP-redirect.
export default function KostenAircoPlaatsenRedirect() {
  const { search, hash } = useLocation();
  return <Navigate replace to={'/kosten-airco-plaatsen' + search + hash} />;
}
