export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post2.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/Elements",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "/Notes",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "/Forms",
        icon: "form.svg",
      },
      {
        id: 4,
        title: "Calendar",
        url: "/Calendar",
        icon: "calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/Settings",
        icon: "setting.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/Backups",
        icon: "backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/Charts",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/Logs",
        icon: "log.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "",
    username: "Nasha Mukt Bharat Abhiyan (NMBA)",
    amount: "",
  },
  {
    id: 2,
    img: "",
    username: "International Day Against Drug Abuse and Illicit Trafficking (IDADAIT)",
    amount: "",
  },
  {
    id: 3,
    img: "",
    username: "Nasha Mukt Bharat Abhiyan (NMBA)",
    amount: "",
  },
  {
    id: 4,
    img: "",
    username: "Art of Living's Drug-Free India Campaign",
    amount: "",
  },
  {
    id: 5,
    img: "",
    username: "India Drug Abuse Prevention Program",
    amount: "",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "345",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 700 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 600 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 300 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Death Rate",
  number: "18%",
  dataKey: "deaths",
  percentage: -21,
  chartData: [
    { name: "Sun", deaths: 400 },
    { name: "Mon", deaths: 700 },
    { name: "Tue", deaths: 600 },
    { name: "Wed", deaths: 400 },
    { name: "Thu", deaths: 450 },
    { name: "Fri",deaths: 200 },
    { name: "Sat", deaths: 500 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "₹ 75000",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 500},
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 340 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 200},
    { name: "Fri", revenue: 250 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Success Rate",
  number: "7.8%",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    // img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Singh Bisht",
    firstName: "Saksham",
    email: "kewez@@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    age: 44,
    status: true,
  },
  {
    id: 2,
    // img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Saxena",
    firstName: "Aryan",
    email: "comhuhmit@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    age: 23,
    status: true,
  },
  {
    id: 3,
    // img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gupta",
    firstName: "Ankit",
    email: "ujudokon@hottmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    status:true,
    age:25,
  },
  {
    id: 4,
    // img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gautam",
    firstName: "Kapil",
    email: "tinhavabe@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    status: true,
    age:26,
  },
  {
    id: 5,
    // img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Sharma",
    firstName: "Chirag",
    email: "gobtagbes@yahoo.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    age:25,
    status:true,
  },
  {
    id: 6,
    // img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Pandit",
    firstName: "Payushwani",
    email: "vulca.eder@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    status: true,
    age:25,
  },
  {
    id: 7,
    // img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lal",
    firstName: "Heera",
    email: "reso.bilic@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    age:30,
    status: true,

  },
  {
    id: 8,
    // img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Mehta",
    firstName: "Tarak",
    email: "codaic@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    status: true,
    age:31,
  },
  {
    id: 9,
    // img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lal",
    firstName: "Moti",
    email: "uzozor@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    age: 43,
    status:false,
  },
  {
    id: 10,
    // img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Singh Bisht",
    firstName: "Vanshika",
    email: "tuhkabapu@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    status: true,
    age: 24,
  },
  {
    id: 11,
    // img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Yadav",
    firstName: "Dherya",
    email: "gibo@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    status: true,
    age:23,
  },
  {
    id: 12,
    // img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gupta",
    firstName: "Khushi",
    email: "tic.harvey@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    status: true,
    age:32
  },
  {
    id: 13,
    // img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Narayan",
    firstName: "Ram",
    email: "ceuc@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    age: 28,
    status: true,
  },
  {
    id: 14,
    // img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Ali Khan",
    firstName: "Sara",
    email: "bafuv@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    age:32,
    status: false,
  },
  {
    id: 15,
    // img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Lawaniya",
    firstName: "Yash",
    email: "ubi@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    age:30,
    status:true,
  },
];

export const products = [
  {
    id: 1,
    img: "",
    title: "Naltrexone",
    color: "white",
    producer: "Sony",
    price: "Rs299",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "",
    title: "Buprenorphine    ",
    color: "black",
    producer: "",
    price: "Rs899",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "",
    title: "Acamprosate  ",
    color: "gray",
    producer: "Samsung",
    price: "Rs999",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "",
    title: "Acamprosate   ",
    color: "white",
    producer: "Apple",
    price: "Rs799",
    createdAt: "01.02.2023",
    inStock: true,
  },
];



export const singleUser = {
  id: 1,
  title: "Ankit Gupta",
  img: "",
  info: {
    username: "xq_ankit",
    fullname: "Ankit Gupta",
    email: "guptankit1712004@gmail.com",
    phone: "9876543210",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "24000 funds issued to centre",
      time: "3 day ago",
    },
    {
      text: "Plan and execute various events aimed at raising awareness and funds for Nasha Mukti Kendra.",
      time: "1 week ago",
    },
    {
      text: "Collaborate with local organizations to arrange community activities and workshops for Nasha Mukti Kendra residents.",
      time: "2 weeks ago",
    },
    {
      text: "Oversee the financial transactions and fund disbursements for Nasha Mukti Kendra staff, ensuring timely and secure transfers.",
      time: "1 month ago",
    },
    {
      text: "Organize training programs and professional development sessions for Nasha Mukti Kendra employees to enhance their skills and knowledge.",
      time: "1 month ago",
    },
    {
      text: "Maintain records and documentation related to event planning, fund transfers, and employee training for Nasha Mukti Kendra.",
      time: "2 months ago",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};
