import { UiLayout } from '@/components/ui/ui-layout'
import { lazy } from 'react'
import { Navigate, RouteObject, useRoutes } from 'react-router-dom'

const AccountListFeature = lazy(() => import('../components/account/account-list-feature'))
const AccountDetailFeature = lazy(() => import('../components/account/account-detail-feature'))
const ClusterFeature = lazy(() => import('../components/cluster/cluster-feature'))
const BasicFeature = lazy(() => import('../components/basic/basic-feature'))
const DashboardFeature = lazy(() => import('../components/dashboard/dashboard-feature'))
const Coins = lazy(() => import('../components/coins/coins'))
const MemeCoins = lazy(() => import('../components/memecoin/meme-coin'))
const Nft = lazy(() => import('../components/nft/nft'))
const Prediction = lazy(() => import('../components/prediction/prediction'))


const links: { label: string; path: string }[] = [
  { label: 'Airdrop', path: '/airdrop' },
  { label: 'Clusters', path: '/clusters' },
  { label: 'Basic Program', path: '/basic' },
  { label: 'Coins', path: '/coins' },
  { label: 'MemeCoins', path: '/memecoins' },
  { label: 'Nft', path: '/nft' },
  { label: 'Prediction', path: '/prediction' },
]

const routes: RouteObject[] = [
  { path: '/airdrop/', element: <AccountListFeature /> },
  { path: '/account/:address', element: <AccountDetailFeature /> },
  { path: '/basic', element: <BasicFeature /> },
  { path: '/clusters', element: <ClusterFeature /> },
  { path: '/coins', element: <Coins /> },
  { path: '/memecoins', element: <MemeCoins /> },
  { path: '/nft', element: <Nft /> },
  { path: '/prediction', element: <Prediction coinId='dogecoin'/> },
]

export function AppRoutes() {
  const router = useRoutes([
    { index: true, element: <Navigate to={'/dashboard'} replace={true} /> },
    { path: '/dashboard', element: <DashboardFeature /> },
    ...routes,
    { path: '*', element: <Navigate to={'/dashboard'} replace={true} /> },
  ])
  return <UiLayout links={links}>{router}</UiLayout>
}
