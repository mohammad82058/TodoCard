function Modal(props) {

  function btnDoneHandler() {
      props.onDone();
  }

  function btnUndoneHandler() {
      props.onUndone();
  }

const title = sessionStorage.getItem("title");
let titleInfo;
switch(title){
  case 'دوره موبوکالج': titleInfo = "آیا دوره دیدی و میتونی به هفته هفتم ی مروری کنی؟";
  break;
  case 'آموزش زبان ': titleInfo = "این هفته زبان انگلیسی مطالعه کردی؟"
  break;
  case 'تفریح هر هفته': titleInfo = "تمام کارهای ضرروی انجام دادی تا به تفریحت برسی؟";
  break;
  case 'گیم زدن': titleInfo = "امروز میتونی گیم بزنی ؟";
  break;
  case 'فیلم نگاه کردن': titleInfo = "برنامه ریزی کردی تا به دوستات به سینما بری؟";
  break;
  default: titleInfo = "undefined Todo";
}

  return(
      <div className="modal">
          <h2>{title}</h2>
          <p>{titleInfo}</p>
          <button className="btn btn--alt" onClick={btnDoneHandler}>انجام شده</button>
          <button className="btn" onClick={btnUndoneHandler}>انجام نشده</button>
      </div>
  )
}

export default Modal;
