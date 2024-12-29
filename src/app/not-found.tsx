import Loading from '@/app/Loading'
import dynamic from 'next/dynamic';

const NotFoundPage = dynamic(() => import('../components/NotFoundPage'), {
  ssr: false,
  loading: () => <Loading />
});

export default function NotFound() {
  return (
    <NotFoundPage />
  )
}