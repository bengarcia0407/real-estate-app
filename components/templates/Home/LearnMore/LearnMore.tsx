import { statesUS } from '@/constants/states'
import BgImg from '@/public/images/bg-learn-more.png'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import classes from './LearnMore.module.css'

interface FormInputs {
  email: string
  state: string[]
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    state: yup.string().required()
  })
  .required()

const LearnMore = () => {
  const { register, handleSubmit } = useForm<FormInputs>({
    resolver: yupResolver(schema)
  })
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data)

  return (
    <div className={classes.root}>
      <Image src={BgImg} alt="" layout="fill" objectFit="cover" />
      <div className={classes.content}>
        <h2>Learn more about our RV camping Hosts </h2>
        <h3>and be the first know about new Hosts in California.</h3>
        <div className={classes.form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.form_control}>
              <input type="text" {...register('email')} />
            </div>
            <div className={classes.form_control}>
              <select {...register('state')}>
                {statesUS.map((state) => (
                  <option
                    key={state.value}
                    value={state.value}
                    selected={state.value == 'CA'}
                  >
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LearnMore
