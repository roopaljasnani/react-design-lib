import {Meta, Story} from '@storybook/react';
import Input, {InputProps} from '.';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {},
} as Meta<typeof Input>;

const Template: Story<InputProps> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Default',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: 'Disabled',
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  disabled: false,
  placeholder: 'Error',
};
