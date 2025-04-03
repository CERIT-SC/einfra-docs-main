import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import Logo from '@/public/img/e-infra/logo.svg';
import Banner from '@/public/img/ceritsc/banner.png';
import BannerMeta from '@/public/img/meta/meta-docs-banner.jpg';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  i18n: false,
  nav: {
    title: (
     <>
       <Image src={Logo} alt="einfra logo" width="50" height="19"/>
       Documentation
     </>
    ),
  },
  links: [
    {
      type: 'menu',
      text: 'CERIT-SC Kubernetes',
      url: 'https://docs.cerit.io/en/docs/platform/overview',
      items: [
        {
          menu: {
            banner: (
               <div className="-mx-3 -mt-3">
                <Image
                  src={Banner}
                  alt="Kubernetes"
                  width="1200"
                  height="710"
                  className="rounded-t-lg object-cover"
                  style={{
                    maskImage:
                      'linear-gradient(to bottom,white 60%,transparent)',
                  }}
                />
               </div>
            ),
            className: 'md:row-span-2',
          },
          text: 'Getting Started',
          description: 'Learn to use Kubernetes and services for your science',
          url: 'https://docs.cerit.io/en/docs/platform/overview',
        },
        {
          // eslint-disable-next-line @next/next/no-img-element
	  icon: <img src="/img/ceritsc/menu-logos/jupyter-logo.svg" alt="jupyter logo" className="h-10 p-0.5"/>,
          text: 'JupyterHub',
          description: 'Run Jupyter notebooks at powerful hardware.',
          url: 'https://docs.cerit.io/en/docs/web-apps/jupyterhub',
          menu: {
            className: 'lg:col-start-3 lg:row-start-2',
          },
        },
        {
          // eslint-disable-next-line @next/next/no-img-element
          icon: <img src="/img/ceritsc/menu-logos/rancher-logo.svg" alt="rancher logo" className="h-10 p-0.5"/>,
          text: 'Rancher',
          description: 'Use Rancher UI to access Kubernetes cluster.',
          url: 'https://docs.cerit.io/en/docs/rancher/rancher',
          menu: {
            className: 'lg:col-start-2 lg:row-start-2',
          },
        },
        {
          // eslint-disable-next-line @next/next/no-img-element
          icon: <img src="/img/ceritsc/menu-logos/foldify-logo.svg" alt="foldify logo" className="h-10 p-0.5"/>,
          text: 'Foldify',
          description: 'Use web UI for protein prediction.',
          url: 'https://docs.cerit.io/en/docs/web-apps/foldify',
          menu: {
            className: 'lg:col-start-3 lg:row-start-1',
          },
        },
        {
          // eslint-disable-next-line @next/next/no-img-element
          icon: <img src="/img/ceritsc/menu-logos/kubernetes-logo.svg" alt="kubernetes logo" className="h-10 p-0.5"/>,
          text: 'Cheapest managed Kubernetes',
          description: 'Use Kubernetes API in fully managed K8s platform.',
          url: 'https://docs.cerit.io/en/docs/platform/overview',
          menu: {
            className: 'lg:col-start-2 lg:row-start-1',
          },
        },
      ], 
    },
    {
      text: 'DU CESNET',
      url: 'https://docs.du.cesnet.cz',
      active: 'nested-url',
    },
    {
      text: 'IT4I',
      url: 'https://docs.it4i.cz',
      active: 'nested-url',
    },
    {
      type: 'menu',
      text: 'MetaCentrum',
      url: 'https://docs.metacentrum.cz',
      items: [
        {
          menu: {
            banner: (
               <div className="-mx-3 -mt-3">
                <Image
                  src={BannerMeta}
                  alt="Meta"
                  width="1200"
                  height="710"
                  className="rounded-t-lg object-cover"
                  style={{
                    maskImage:
                      'linear-gradient(to bottom,white 60%,transparent)',
                  }}
                />
               </div>
            ),
            className: 'md:row-span-2',
          },
          text: 'Getting Started',
          description: 'Learn how to start to use MetaCentrum Grid Computing services',
          url: 'https://docs.metacentrum.cz/en/docs/computing/run-basic-job',
        },
        {
          // eslint-disable-next-line @next/next/no-img-element
	  icon: <img src="/img/meta/menu-logos/ondemand-logo-1.jpg" alt="ondemand logo" className="h-10 p-0.5"/>,
          text: 'OnDemand',
          description: 'Web-based interface providing easy access to high-performance computing (HPC) resources without requiring command-line expertise.',
          url: 'https://docs.metacentrum.cz/en/docs/ondemand',
          menu: {
            className: 'lg:col-start-3 lg:row-start-2',
          },
        },
        {
          // eslint-disable-next-line @next/next/no-img-element
          icon: <img src="/img/meta/menu-logos/jupyter.png" alt="jupyter logo" className="h-10 p-0.5"/>,
          text: 'Jupyter Notebooks',
          description: 'Web-based interface enables users to write and execute code in multiple programming languages (e.g., Python, R, Julia) in a browser-based interface.',
          url: 'https://docs.metacentrum.cz/en/docs/software/sw-list/jupyter',
          menu: {
            className: 'lg:col-start-2 lg:row-start-2',
          },
        },
        {
          // eslint-disable-next-line @next/next/no-img-element
          icon: <img src="/img/meta/menu-logos/galaxy_logo_25percent_transparent.png" alt="galaxy logo" className="h-10 p-0.5"/>,
          text: 'Galaxy',
          description: 'Web-based platform designed for running computational and statistical analyses with focus on openness and usage of FAIR data (biomedical science, ecology, natural language processing, chemistry, climate science,  social sciences, etc).',
          url: 'https://docs.metacentrum.cz/en/docs/related/galaxy',
          menu: {
            className: 'lg:col-start-3 lg:row-start-1',
          },
        },
        {
          // eslint-disable-next-line @next/next/no-img-element
          icon: <img src="/img/meta/menu-logos/elixir_logo.png" alt="elixir logo" className="h-10 p-0.5"/>,
          text: 'ELIXIR-CZ',
          description: 'Services available for ELIXIR community.',
          url: 'https://docs.metacentrum.cz/en/docs/access/elixir',
          menu: {
            className: 'lg:col-start-2 lg:row-start-1',
          },
        },
      ], 
    },
    { 
      text: 'NRP',
      url: 'https://docs.nrp.eosc.cz',
      active: 'nested-url',
    }
  ],
  disableThemeSwitch: true,
};
