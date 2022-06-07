import {
  Button,
  Input,
  MultiSelect,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";

import { At, Message, Send, User } from "tabler-icons-react";
import { primary } from "../styles/theme";
// import inputStyles from "../styles/FloatingInput.module.css"
// import FloatingLabelInput from "react-floating-label-input";
import Script from "next/script";
import { useState } from "react";
import {
  useDebouncedValue,
  useEventListener,
  useInputState,
  useUncontrolled,
} from "@mantine/hooks";
const CustomInput = ({
  label,
  type,
  name,
  id,
  setHigherState,
  onChange,
  icon,
  placeholder,
  defaultValue,
  className,
  // onChangeFunction,
  textarea,
  state,
}) => {
  const [_value, handleChange] = useUncontrolled({
    state,
    defaultValue,
    finalValue: "Final",
    rule: (val) => typeof val === "string",
    onChange,
  });

  return (
    <div className="flex flex-col my-2">
      <label className="flex flex-col text-white">
        {label}
        <div
          className={`flex flex-row  border-2 border-cyan-400 w-[400px] ${
            textarea ? "h-30 items-start" : "h-10 items-center"
          } rounded-md `}
        >
          {icon}
          {textarea ? (
            <textarea
              className="w-[200px] h-32 rounded-tr-md rounded-br-md bg-transparent  focus:outline-none focus:border-sky-500 focus:bg-transparent autofill:bg-transparent"
              id={id}
              name={name}
              placeholder={placeholder}
              type={type}
              onChange={(event) => handleChange(event.currentTarget.value)}
            />
          ) : (
            <input
              className="w-[300px] h-10 rounded-tr-md rounded-br-md bg-transparent    focus:outline-none focus:border-sky-500 focus:bg-transparent autofill:bg-transparent  "
              id={id}
              name={name}
              value={_value}
              placeholder={placeholder}
              type={type}
              onChange={(event) => handleChange(event.currentTarget.value)}
            />
          )}
        </div>
      </label>
    </div>
  );
};

function WithUseInputState() {
  const [stringValue, setStringValue] = useInputState("");
  const [numberValue, setNumberValue] = useInputState(0);

  return (
    <>
      <input type="text" value={stringValue} onChange={setStringValue} />
      <TextInput value={stringValue} onChange={setStringValue} />
      <NumberInput value={numberValue} onChange={setNumberValue} />
    </>
  );
}
// setNumberValue;
const Contact = () => {
  const [email, setEmail] = useInputState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useInputState("");
  const [activeItem, setActiveItem] = useState("message");
  const [orderMail, setOrderMail] = useInputState("");
  const [organisationName, setOrganisationName] = useInputState("");
  const [orderDetail, setOrderDetail] = useInputState("");
  const [orderDate, setOrderDate] = useInputState("");
  // const mailRef = useEventListener("change", (e) => {
  //   setEmail("email");
  //   console.log(e);
  // });

  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 500);
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
    <>
      <CustomInput
        icon={<User size={32} />}
        label={""}
        name="name"
        setState={setName}
        state={name}
        onChange={(e) => {
          setName(e);
        }}
        // setHigherState={setName}
        placeholder="Your name"
        type={"text"}
      />

      <CustomInput
        icon={<At size={25} />}
        label={""}
        name="email"
        placeholder="Email"
        onChange={setEmail}
      />
      <CustomInput
        icon={<Message size={25} />}
        name="name"
        placeholder="Your Message"
        textarea={true}
        onChange={setMessage}
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
        onClick={() => {
          console.log(message);
        }}
      >
        Send
      </Button>
    </>
  );
  const OrderData = () => (
    <>
      <CustomInput
        icon={<User size={32} />}
        label={""}
        name="name"
        setState={setName}
        state={name}
        onChange={(e) => {
          setName(e);
        }}
        // setHigherState={setName}
        placeholder="Your name"
        type={"text"}
      />

      <CustomInput
        icon={<At size={25} />}
        label={""}
        name="email"
        placeholder="Email"
        onChange={setEmail}
      />
      <CustomInput
        icon={<Message size={25} />}
        name="name"
        placeholder="Your Message"
        textarea={true}
        onChange={setMessage}
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
        onClick={() => {
          console.log(message);
        }}
      >
        Send
      </Button>
    </>
  );
  return (
    <div>
      <h1 className="font-bold text-2xl text-white relative  ">Contact</h1>
      <div className="flex flex-col justify-center items-center">
        <Selector
          setState={{
            activeItem,
            setActiveItem,
          }}
        />

        {activeItem == "message" ? <MessageData /> : <OrderData />}
      </div>
      {/* <MessageData /> */}
    </div>
  );
};

const Selector = (props) => {
  //   const [activeItem, setActiveItem] = useState("order");
  const { activeItem, setActiveItem } = props.setState;
  const activeClasses =
    "bg-green-400 w-60 h-10 rounded-full items-center justify-center flex";
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
