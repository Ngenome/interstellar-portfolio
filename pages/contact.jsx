import { Button, Input, MultiSelect, Textarea } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useState } from "react";
import { At, Message, Send, User } from "tabler-icons-react";
import { primary } from "../styles/theme";
// import inputStyles from "../styles/FloatingInput.module.css"
import FloatingLabelInput from "react-floating-label-input";
const CustomInput = ({
  label,
  type,
  name,
  id,
  icon,
  placeholder,
  className,
  onChange,
  textarea,
}) => {
  return (
    <div className="flex flex-col my-2">
      <label className="flex flex-col text-white">
        {label}
        <div
          className={`flex flex-row  border-2 border-cyan-400 w-[20vw] ${
            textarea ? "h-30 items-start" : "h-10 items-center"
          } rounded-md `}
        >
          {icon}
          {textarea ? (
            <textarea
              className="w-[18.9vw] h-32 rounded-tr-md rounded-br-md bg-transparent    focus:outline-none focus:border-sky-500 focus:bg-transparent autofill:bg-transparent  "
              id={id}
              name={name}
              placeholder={placeholder}
              type={type}
              onChange={onChange}
            />
          ) : (
            <input
              className="w-[18.9vw] h-10 rounded-tr-md rounded-br-md bg-transparent    focus:outline-none focus:border-sky-500 focus:bg-transparent autofill:bg-transparent  "
              id={id}
              name={name}
              placeholder={placeholder}
              type={type}
              onChange={onChange}
            />
          )}
        </div>
      </label>
    </div>
  );
};
const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [activeItem, setActiveItem] = useState("order");
  const [orderMail, setOrderMail] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [orderDetail, setOrderDetail] = useState("");
  const [orderDate, setOrderDate] = useState("");
  // const
  const data = [
    { value: "react", label: "React" },
    { value: "ng", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "vue", label: "Vue" },
    { value: "riot", label: "Riot" },
    { value: "next", label: "Next.js" },
    { value: "blitz", label: "Blitz.js" },
  ];
  const CommonStyles = {
    wrapper: {
      width: "20vw",
      marginTop: 20,
      //   color: "white",
      borderColor: "aqua",
      borderWidth: 2,
      borderRadius: 5,
      color: primary,
    },
    label: {
      color: "white",
    },
    icon: {
      verticalAlign: "top",

      position: "absolute",
      color: primary,
    },
    input: {
      backgroundColor: "transparent",
    },
  };
  const MessageData = () => (
    <div>
      <CustomInput
        icon={<User size={32} />}
        label={""}
        name="name"
        placeholder="Your name"
      />
      <CustomInput
        icon={<At size={25} />}
        label={""}
        name="email"
        placeholder="Email"
      />
      <CustomInput
        icon={<Message size={25} />}
        name="name"
        placeholder="Your Message"
        textarea={true}
      />

      <Button
        leftIcon={<Send />}
        styles={{
          filled: {
            color: "cyan",
            backgroundColor: "white",
          },
          default: {
            color: "red",
          },
        }}
        variant="filled"
      >
        Send
      </Button>
    </div>
  );
  const OrderData = () => (
    <div>
      <Input
        variant="outline"
        styles={{
          ...CommonStyles,
        }}
        icon={<User />}
        placeholder="Your organisation name/your name"
        onChange={(e) => {
          setOrganisationName(e.target.value);
        }}
      />
      <Input
        styles={{
          ...CommonStyles,
        }}
        icon={<At />}
        placeholder="Your Email"
        onChange={(e) => {
          setOrderMail(e.target.value);
        }}
      />
      <MultiSelect
        styles={{
          wrapper: {
            width: "20vw",
            marginTop: 10,
            color: "white",
            borderColor: "aqua",
          },
          icon: {
            verticalAlign: "top",

            position: "absolute",
            color: primary,
          },
          label: {
            color: "white",
            marginTop: 3,
          },
          input: {
            backgroundColor: "transparent",
          },
        }}
        data={data}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
      />
      <DatePicker
        styles={{
          wrapper: {
            width: "20vw",
            marginTop: 20,
            color: "white",
            borderColor: "aqua",
          },
          icon: {
            verticalAlign: "top",

            position: "absolute",
            color: primary,
          },
          label: {
            color: "white",
            marginTop: 3,
          },
          input: {
            backgroundColor: "transparent",
          },
        }}
        placeholder="Pick date"
        label="Event date"
        required
      />
      <Textarea
        styles={{
          input: {
            height: 200,
          },
          icon: {
            verticalAlign: "top",
            top: "-80%",
            position: "absolute",
          },
          wrapper: {
            alignItems: "flex-start",
            justifyContent: "flex-start",
            display: "flex",
            width: "20vw",
            marginTop: 20,
            height: 200,
            // backgroundColor: "red",
          },
        }}
        icon={<Message />}
        placeholder="Details of the service you need"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
    </div>
  );
  return (
    <div>
      <h1 className="font-bold text-2xl text-white relative ">Contact</h1>
      <div>
        <Selector
          setState={{
            activeItem,
            setActiveItem,
          }}
        />
      </div>
      {/* {activeItem == "message" ? <MessageData /> : <OrderData />} */}

      <MessageData />
    </div>
  );
};

const Selector = (props) => {
  //   const [activeItem, setActiveItem] = useState("order");
  const { activeItem, setActiveItem } = props.setState;
  const activeClasses =
    "bg-green-400 w-72 h-10 rounded-full items-center justify-center flex";
  const inActiveClasses =
    " w-72 h-10 rounded-full items-center justify-center flex";
  return (
    <div className="flex flex-row flex-nowrap rounded-full border-2 w-[400px] self-center">
      <div
        onClick={() => {
          setActiveItem("message");
        }}
        className={activeItem == "message" ? activeClasses : inActiveClasses}
      >
        <span className="text-white cursor-pointer">Message/Inquiry</span>
      </div>
      <div
        className={activeItem == "order" ? activeClasses : inActiveClasses}
        onClick={() => {
          setActiveItem("order");
        }}
      >
        <span className="text-white cursor-pointer">Place an order</span>
      </div>
    </div>
  );
};
export default Contact;
