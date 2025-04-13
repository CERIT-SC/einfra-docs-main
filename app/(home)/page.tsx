import { Cards3, Card } from '@/components/card3';
import { Fingerprint, Cpu, Database, MoveRight } from 'lucide-react'; 

export default function HomePage() {
  return (
    <main className="container relative max-w-[1100px] px-2 py-4 lg:py-16">
      <h1 className="mb-4 text-2xl font-bold">Welcome to e-INFRA CZ Documentation!</h1>
      <p className="text-fd-muted-foreground">
      The home for the documentation of all e-INFRA CZ services that are provided to the scientific community in the Czech Republic.
      </p>
      <Cards3 className="pt-4">
        <Card title="e-INFRA CZ Account" icon={<Fingerprint/>}>
          <p>Start by setting up your <b>e-INFRA CZ Account</b>, you will get it automatically during registration to any service.</p>
          <ul className="pt-2">
           <li><a href="https://docs.account.e-infra.cz/en/docs/access/account" className="text-fd-primary flex items-center gap-2"><MoveRight /> How to get access</a></li>
           <li><a href="hhttps://docs.account.e-infra.cz/en/docs/access/perun" className="text-fd-primary flex items-center gap-2"><MoveRight /> Managing access using Perun</a></li>
           <li><a href="https://docs.account.e-infra.cz/en/docs/access/mfa" className="text-fd-primary flex items-center gap-2"><MoveRight /> Multi-Factor Authentication</a></li>
          </ul>
        </Card>
        <Card title="Data Processing" icon={<Cpu />}>
          <p>Focus on what&apos;s important, your research can be accelerated with our <b>big</b> servers.</p>
          <ul className="pt-2">
           <li><a href="https://docs.metacentrum.cz/" className="text-fd-primary flex items-center gap-2"><MoveRight /> Batch computing (MetaCentrum Grid)</a></li>
           <li><a href="https://docs.it4i.cz/" className="text-fd-primary flex items-center gap-2"><MoveRight /> Supercomputing (IT4I)</a></li>
           <li><a href="https://docs.platforms.cloud.e-infra.cz/en/docs" className="text-fd-primary flex items-center gap-2"><MoveRight /> Compute Cloud (Virtualization)</a></li>
           <li><a href="https://docs.cerit.io/en/docs/platform/overview" className="text-fd-primary flex items-center gap-2"><MoveRight /> Container Platform (Kubernetes CERIT-SC)</a></li>
           <li><a href="https://www.cerit-sc.cz/infrastructure-services/sensitivecloud" className="text-fd-primary flex items-center gap-2"><MoveRight /> Sensitive Cloud (Kubernetes CERIT-SC)</a></li>
          </ul>
        </Card>
        <Card title="Data Storage & Repositories" icon={<Database />}>
          <p>Need to store <b>terabytes</b> or <b>long-term</b> data? Read what capabilities you have.</p>
          <ul className="pt-2">
           <li><a href="https://docs.du.cesnet.cz/" className="text-fd-primary flex items-center gap-2"><MoveRight /> Overview</a></li>
           <li><a href="https://docs.du.cesnet.cz/" className="text-fd-primary flex items-center gap-2"><MoveRight /> Synchronisation&Sharing</a></li>
           <li><a href="https://docs.du.cesnet.cz/en/docs/object-storage-s3/s3-service" className="text-fd-primary flex items-center gap-2"><MoveRight /> Object Storage</a></li>
           <li><a href="https://docs.nrp.eosc.cz/" className="text-fd-primary flex items-center gap-2"><MoveRight /> National Data Repositories (NRP)</a></li>
          </ul>
        </Card>
      </Cards3>
    </main>
  );
}
