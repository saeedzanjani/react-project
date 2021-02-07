// import React from 'react'
// import Button from '../components/UI/button/button'

// const Connect = () => {

//     return (
//       <React.Fragment>
//         <h1 className="my-3">تماس با ما</h1>
//         <div 
//          style={{width: "70%", margin: "0 auto", 
//          borderRadius: "4px", direction: "rtl",
//          boxShadow: "0 2px 4px 5px rgba(0,0,0,.3)",
//          fontSize: "18px", fontWeight: "500"
//          }}>
//          <br />
//          <label >نام و نام خانوادگی</label>
//          <input type="text" />
//          <br />
//          <label htmlFor="phone">شماره تلفن</label>
//          <input type="number" id required maxLength={11} />
//          <br />
//          <label htmlFor="email">ایمیل</label>
//          <br />
//          <input type="email" id="email" required />
//          <br />
//          <label>توضیحات</label>
//          <br />
//          <textarea cols="50" rows="12" ></textarea>
//          <br />
//          <Button clicked={() => alert("Your Message is sent")} btnType="danger">ارسال</Button>
//          </div>
//          <div className="my-4" style={{fontSize: "18px"}}>
//         <h3>ادرس شرکت</h3>
//         <p> تهران تهران تهران تهران تهران </p>
//         <h3>شماره تماس</h3>
//         <p>021111111111</p>
//         </div>
//       </React.Fragment>
//     )
// }

// export default Connect;





















import React from 'react'
import Button from '../components/UI/button/button'
import * as yup from 'yup';
import { Formik } from 'formik';
import { Form, Col, InputGroup, Container } from 'react-bootstrap'

const Connect = () => {

  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    file: yup.string().required(),
    terms: yup.bool().required(),
  });

    return (
      <React.Fragment>
        <Container>
      <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: 'Mark',
        lastName: 'Otto',
      }}
      >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik101">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik102">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormik103">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik104">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik105">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.File
              className="position-relative"
              required
              name="file"
              label="File"
              onChange={handleChange}
              isInvalid={!!errors.file}
              feedback={errors.file}
              id="validationFormik107"
              feedbackTooltip
            />
          </Form.Group>
          <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              id="validationFormik106"
              feedbackTooltip
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
        </Container>
      </React.Fragment>
    )
}

export default Connect;































// import React from 'react'
// import Button from '../components/UI/button/button'
// import * as yup from 'yup';
// import { Formik } from 'formik';
// import { Form, Col, InputGroup, Container } from 'react-bootstrap'

// const Connect = () => {

//   // const { Formik } = formik;

//   const schema = yup.object({
//     firstName: yup.string().required(),
//     lastName: yup.string().required(),
//     username: yup.string().required(),
//     city: yup.string().required(),
//     state: yup.string().required(),
//     zip: yup.string().required(),
//     file: yup.string().required(),
//     terms: yup.bool().required(),
//   });

//     return (
//       <React.Fragment>
//         <Container>
//       <Formik
//       validationSchema={schema}
//       onSubmit={console.log}
//       initialValues={{
//         firstName: 'Mark',
//         lastName: 'Otto',
//       }}
//       >
//       {({
//         handleSubmit,
//         handleChange,
//         handleBlur,
//         values,
//         touched,
//         isValid,
//         errors,
//       }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//           <Form.Row>
//             <Form.Group as={Col} md="4" controlId="validationFormik101">
//               <Form.Label>First name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="firstName"
//                 value={values.firstName}
//                 onChange={handleChange}
//                 isValid={touched.firstName && !errors.firstName}
//               />
//               <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationFormik102">
//               <Form.Label>Last name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="lastName"
//                 value={values.lastName}
//                 onChange={handleChange}
//                 isValid={touched.lastName && !errors.lastName}
//               />

//               <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
//               <Form.Label>Username</Form.Label>
//               <InputGroup>
//                 <InputGroup.Prepend>
//                   <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                 </InputGroup.Prepend>
//                 <Form.Control
//                   type="text"
//                   placeholder="Username"
//                   aria-describedby="inputGroupPrepend"
//                   name="username"
//                   value={values.username}
//                   onChange={handleChange}
//                   isInvalid={!!errors.username}
//                 />
//                 <Form.Control.Feedback type="invalid" tooltip>
//                   {errors.username}
//                 </Form.Control.Feedback>
//               </InputGroup>
//             </Form.Group>
//           </Form.Row>
//           <Form.Row>
//             <Form.Group as={Col} md="6" controlId="validationFormik103">
//               <Form.Label>City</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="City"
//                 name="city"
//                 value={values.city}
//                 onChange={handleChange}
//                 isInvalid={!!errors.city}
//               />

//               <Form.Control.Feedback type="invalid" tooltip>
//                 {errors.city}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik104">
//               <Form.Label>State</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="State"
//                 name="state"
//                 value={values.state}
//                 onChange={handleChange}
//                 isInvalid={!!errors.state}
//               />
//               <Form.Control.Feedback type="invalid" tooltip>
//                 {errors.state}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik105">
//               <Form.Label>Zip</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Zip"
//                 name="zip"
//                 value={values.zip}
//                 onChange={handleChange}
//                 isInvalid={!!errors.zip}
//               />

//               <Form.Control.Feedback type="invalid" tooltip>
//                 {errors.zip}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Form.Row>
//           <Form.Group>
//             <Form.File
//               className="position-relative"
//               required
//               name="file"
//               label="File"
//               onChange={handleChange}
//               isInvalid={!!errors.file}
//               feedback={errors.file}
//               id="validationFormik107"
//               feedbackTooltip
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Check
//               required
//               name="terms"
//               label="Agree to terms and conditions"
//               onChange={handleChange}
//               isInvalid={!!errors.terms}
//               feedback={errors.terms}
//               id="validationFormik106"
//               feedbackTooltip
//             />
//           </Form.Group>
//           <Button type="submit">Submit form</Button>
//         </Form>
//       )}
//     </Formik>
//         </Container>
//       </React.Fragment>
//     )
// }

// export default Connect;