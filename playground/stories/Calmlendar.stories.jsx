import React from 'react';
import Calmlendar from 'calmlendar';

export default {
  title: 'Example/Calmlendar',
  component: Calmlendar,
};

const Template = (args) => <Calmlendar {...args} />;

export const WeekView = Template.bind({});
WeekView.args = {
  name: 'WeekView',
};
