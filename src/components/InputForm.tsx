import React from "react";
import { Box, Input, Button, Text, Spinner } from "theme-ui";
import { useDispatch, useSelector } from 'react-redux';
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { submitFormRequest } from '../store/actions.ts';

const InputForm: React.FC = () => {
    const dispatch = useDispatch();
    const {  loading } = useSelector((state: any) => state);
    const { register, handleSubmit, formState: { errors }, trigger } = useForm({
        mode: 'onChange',
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        dispatch(submitFormRequest(data));
    };

    return (
        <Box sx={{ width: 400, mx: "auto", textAlign: "center", mt: 5 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ mb: 3 }}>
                    <Input
                        sx={{
                            mb: 1,
                            borderColor: errors.name ? "red" : "primary",
                        }}
                        placeholder="Enter your name"
                        {...register("name", {
                            required: "Name is required",
                        })}
                        onBlur={() => trigger("name")}
                    />
                    <Box sx={{ height: 24 }}>
                        {errors.name && <Text sx={{ color: "red" }}>{(errors.name as any).message}</Text>}
                    </Box>
                </Box>

                <Box sx={{ mb: 3 }}>
                    <Input
                        sx={{
                            mb: 1,
                            borderColor: errors.email ? "red" : "primary",
                        }}
                        placeholder="Enter your email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email address"
                            }
                        })}
                        onBlur={() => trigger("email")}
                    />
                    <Box sx={{ height: 24 }}>
                        {errors.email && <Text sx={{ color: "red" }}>{(errors.email as any).message}</Text>}
                    </Box>
                </Box>

                <Box sx={{ mb: 3 }}>
                    <Input
                        sx={{
                            mb: 1,
                            borderColor: errors.message ? "red" : "primary",
                        }}
                        placeholder="Enter a message"
                        as="textarea"
                        {...register("message", {
                            required: "Message is required",
                            minLength: { value: 10, message: "Message must be at least 10 characters" }
                        })}
                        onBlur={() => trigger("message")}
                    />
                    <Box sx={{ height: 24 }}>
                        {errors.message && <Text sx={{ color: "red" }}>{(errors.message as any).message}</Text>}
                    </Box>
                </Box>

                {loading ? (
                    <Spinner size={20} />
                ) : (
                    <Button sx={{ variant: "buttons.primary" }} type="submit" disabled={loading}>
                        Submit
                    </Button>
                )}
            </form>

        </Box>
    );
};

export default InputForm;
