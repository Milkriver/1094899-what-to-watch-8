interface IProps {
  isButtonShowen: boolean
  handleShowMoreButton: () => void
}

export function ShowMoreButton(props: IProps): JSX.Element {
  const { handleShowMoreButton, isButtonShowen } = props;

  return (
    <div className='catalog__more'>
      {isButtonShowen ? <button className='catalog__button' type='button' onClick={handleShowMoreButton}>Show more</button> : ''}
    </div>
  );

}


