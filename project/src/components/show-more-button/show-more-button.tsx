interface IProps {
  checkIsButtonShowen: boolean
  handleShowMoreButton: () => void
}

export function ShowMoreButton(props: IProps): JSX.Element {
  const { handleShowMoreButton, checkIsButtonShowen } = props;

  return (
    <div className='catalog__more'>
      {checkIsButtonShowen ? <button className='catalog__button' type='button' onClick={handleShowMoreButton}>Show more</button> : ''}
    </div>
  );

}


