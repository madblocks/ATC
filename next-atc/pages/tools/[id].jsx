import DetailLayout from '../../components/detail_layout';
import Head from 'next/head';

export default function ToolDetail () {
  return (
    <DetailLayout>
      <Head></Head>
      <div className="text-white">Tool Details</div>
    </DetailLayout>
  )
}