import Foo from '../view/foo.vue';
import Bar from '../view/bar.vue';

export default [{
        path: '/',
        component: Foo
    },
    {
        path: '/bar',
        name: 'bar',
        component: Bar
    }
];