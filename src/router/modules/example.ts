/** When your routing table is too long, you can split it into small modules**/

import Layout from '../../layout/index.vue';

const exampleRouter = {
  path: '/example',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Example',
  meta: {
    title: 'Example',
    icon: 'chart',
  },
  children: [
    {
      path: 'child1',
      component: () => import('../../components/HelloWorld.vue'),
      name: 'KeyboardChart',
      meta: { title: 'Keyboard Chart', noCache: true },
    },
    // Add more child routes here
  ],
};

export default exampleRouter;
