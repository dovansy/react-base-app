import { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from '~/layouts';
import { publicRoutes } from '~/routes';

export default function PrivateProvider() {
  const location = useLocation();
  return (
    <Suspense fallback={null}>
      <Layout>
        <Routes>
          {publicRoutes.map((route) => {
            const Page = route.component;
            return <Route path={route.path} element={<Page />} />;
          })}
        </Routes>
      </Layout>
    </Suspense>
  );
}
