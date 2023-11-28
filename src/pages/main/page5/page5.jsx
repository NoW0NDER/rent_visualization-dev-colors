import TableauReport from 'tableau-react';

const Page5 = props => (
    <TableauReport
        //url="https://public.tableau.com/views/Distribution_17007121109050/Distribution?:language=zh-CN&:display_count=n&:origin=viz_share_link"
        url="https://prod-apnortheast-a.online.tableau.com/t/wanghaonian/views/renting/1/ae639bfc-73ba-405b-ae53-2e1da727f1cc/1"
        debug={false}

    />

)

export default Page5;

// import React from 'react';
// import TableauReport from 'react-tableau';

// const Page5 = props => (
//     <TableauReport
//         url="https://prod-apnortheast-a.online.tableau.com/t/wanghaonian/views/renting/1/ae639bfc-73ba-405b-ae53-2e1da727f1cc/1"
//     // options={{
//     //     hideTabs: true,
//     //     width: "1150px",
//     //     height: "740px",
//     //     toolbar: "bottom"
//     // }}
//     />
// )

// export default Page5;