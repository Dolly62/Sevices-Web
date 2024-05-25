import "@/styles/globals.css";

export default function App(props) {
  return <props.Component {...props.pageProps} />;
}
