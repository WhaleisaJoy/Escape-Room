import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from '../../../../assets/img/icon-close.svg';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../../hooks';
import { useForm } from "react-hook-form";
import { postBookingOrderAction } from '../../../../store/api-actions';
import { toast } from 'react-toastify';
import { BookingOrder } from '../../../../types/types';

type BookingModalProps = {
  onCloseBtnClick: () => void,
};

const BookingModal = ({onCloseBtnClick}: BookingModalProps): JSX.Element => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm<BookingOrder>();

  const dispatch = useAppDispatch();
  const onFormSubmit = (data: BookingOrder) => {
    dispatch(postBookingOrderAction({...data, peopleCount: +data.peopleCount}));
    reset();
    onCloseBtnClick();
  };

  useEffect(() => {
    toast.warning(errors.name?.message);
    toast.warning(errors.phone?.message);
    toast.warning(errors.peopleCount?.message);
    toast.warning(errors.isLegal?.message);
  }, [
    errors.isLegal?.message,
    errors.name?.message,
    errors.peopleCount?.message,
    errors.phone?.message,
  ]);

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={onCloseBtnClick}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              placeholder="Имя"
              {...register('name', {
                required: 'Это поле обязательно для заполнения'
              })}
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              placeholder="Телефон"
              {...register('phone', {
                required: 'Это поле обязательно для заполнения',
                pattern: {
                  value: /^\d+$/,
                  message: 'Проверьте, пожалуйста, корректность введеного номера телефона'
                },
                minLength: {
                  value: 10,
                  message: 'Номер телефона должен содеражть минимум 10 цифр без пробелов'
                }
              })}
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              placeholder="Количество участников"
              {...register('peopleCount', {
                required: 'Это поле обязательно для заполнения',
              })}
              required
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              {...register('isLegal', {
                required: 'Это поле обязательно для заполнения',
              })}
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  )
};

export default BookingModal;
