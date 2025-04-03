import s from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ children }) {
  return <button className={s.btn}>{children}</button>;
}
