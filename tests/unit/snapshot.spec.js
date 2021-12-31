import SongItem from '@/components/SongItem.vue';
import {shallowMount, RouterLinkStub} from '@vue/test-utils';

describe('snapshot SongItem.vue',()=>{
    test('renders correctly',()=>{
        const song ={
            docId: 'abc',
            modified_name: 'test',
            display_name: 'test',
            comment_count: 5,
        };

        const wrapper = shallowMount(SongItem,{
            propsData:{song},
            global:{
                components:{'router-link': RouterLinkStub},
            },
        });

        expect(wrapper.element).toMatchSnapshot();

    });
});