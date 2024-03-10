import * as Yup from 'yup';

export const QuerySchema = Yup.object({
    QueryTitle: Yup.string().min(20).max(150).required("Please Write Query Title"),
    QueryDetails: Yup.string().min(300).max(2000).required("Please Write Query Details")
})