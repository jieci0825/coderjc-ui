import { PropType } from 'vue';
import { TreeNode } from './tree.type';

declare const _default: import('vue').DefineComponent<{
    node: {
        type: PropType<TreeNode>;
        required: true;
    };
}, () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    node: {
        type: PropType<TreeNode>;
        required: true;
    };
}>>, {}, {}>;
export default _default;
