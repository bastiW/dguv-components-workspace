import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DguvComponentsModule, DguvSampleComponent } from 'dguv-components';

export default {
  title: 'Example/DGUV-sample',
  component: DguvSampleComponent,
  decorators: [
    moduleMetadata({
      imports: [DguvComponentsModule],
    }),
  ],
} as Meta;

const Template: Story<DguvSampleComponent> = (args: DguvSampleComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<DguvSampleComponent>;