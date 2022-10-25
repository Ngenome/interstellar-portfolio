import {
  Button,
  Input,
  MultiSelect,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import BIRDS from "vanta/dist/vanta.birds.min";
import HALO from "vanta/dist/vanta.halo.min";
import NET from "vanta/dist/vanta.net.min";
import { At, Message, Send, User } from "tabler-icons-react";
import { primary } from "../styles/theme";
// import inputStyles from "../styles/FloatingInput.module.css"
// import FloatingLabelInput from "react-floating-label-input";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import {
  useDebouncedValue,
  useEventListener,
  useInputState,
  useUncontrolled,
} from "@mantine/hooks";
import axios from "axios";
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
              className="w-[80vw] sm:w-[300px] h-10 rounded-tr-md rounded-br-md bg-transparent    focus:outline-none focus:border-sky-500 focus:bg-transparent autofill:bg-transparent  "
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
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaBG = useRef(null);
  const [sent, setSent] = useState(false);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaBG.current,
        })
      );
    }
    if (vantaEffect) {
      vantaEffect.setOptions({
        color: "aqua",
      });
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
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

  return (
    <div ref={vantaBG} id="vantaBG" className="min-h-screen">
      <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        onLoad={() => {}}
      />
      {/* <Script
        strategy="beforeInteractive"
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
      />
      <Script
        strategy="beforeInteractive"
        src="/scripts/vanta.js"
        onLoad={() => {
          console.log("VANTA");
        }}
      /> */}
      <h1 className="font-bold text-2xl text-white relative  ">Contact</h1>
      <div className="flex flex-col justify-center items-center">
        {/* <Selector
          setState={{
            activeItem,
            setActiveItem,
          }}
        />{activeItem == "message" ? <MessageData /> : <OrderData />} */}
        <div>
          <div className="flex flex-col mt-2">
            <label htmlFor="name" className="text-white">
              Name
            </label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="Name"
              id="name"
              className="h-10 w-[70vw] border-2  text-white px-2 border-sky-100 bg-blue-900 bg-opacity-20 rounded-md"
            />
          </div>
          <div className="flex flex-col mt-2">
            <span className="text-white">Email</span>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
                if (
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                    e.target.value
                  )
                ) {
                  e.target.style.borderColor = "chartreuse";
                } else {
                  e.target.style.borderColor = "tomato";
                }
              }}
              id="email"
              type="email"
              className="h-10 w-[70vw] text-white px-2 border-2   bg-blue-900 bg-opacity-20 rounded-md"
            />
          </div>
          <div className="flex flex-col mt-2">
            <span className="text-white ">Message</span>
            <textarea
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              id="email"
              className="h-40 w-[70vw]  text-white px-2  border-2 border-sky-100  bg-blue-900 bg-opacity-20 rounded-md"
            />
          </div>
          <div className="flex flex-row justify-center mt-4">
            <div
              onClick={() => {
                if (!sent) {
                  if (message.length < 1) {
                    alert("Enter a message");
                  } else if (
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                  ) {
                    axios
                      .post("https://stellarsendymail.herokuapp.com", {
                        sender_email: email,
                        subject: `
                    Portfolio Contact form, from ${email}
                    `,
                        message: message,
                      })
                      .then(function (response) {
                        setSent(true);
                        alert("sent the email successfully");
                      })
                      .catch(function (error) {
                        alert("sorry an error occured, try again later");
                      });
                  } else {
                    alert("Please enter a valid email");
                  }
                } else {
                  alert("You already sent an email");
                }
              }}
              className="p-2 w-32 rounded-lg bg-cyan-400 flex justify-center items-center"
            >
              <span className="text-white ">Send</span>
            </div>
          </div>
        </div>
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
