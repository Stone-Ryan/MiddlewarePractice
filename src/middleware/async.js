const async = ({ dispatch }) => {
  return next => action => {
    console.log(action);

    next(action);
  }
}

export default async;
