import { useHistory, useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);
  const history = useHistory();
  const onClickDetailA = () => history.goBack();
  return (
    <div>
      <h1>Page1DetailAです</h1>
      <button onClick={onClickDetailA}>戻る</button>
    </div>
  );
};
