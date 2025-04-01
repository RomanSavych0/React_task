import { Box, Text } from "theme-ui";
import {useTheme} from "@emotion/react";
import {useSelector} from "react-redux";
import {RootState} from "../store";

const Submissions = () => {
    // @ts-ignore
    const { colors } = useTheme();

    const submissions = useSelector((state:RootState)=>state.userForm.submissions)

    return (
        <Box sx={{ maxWidth: "600px", mx: "auto", mt: 5 }}>
            {submissions.map((submission, index) => (
                <Box
                    key={index}
                    sx={{
                        mb: 3,
                        p: 3,
                        border: "1px solid",
                        borderColor: colors.primary,
                        borderRadius: "8px",
                        backgroundColor: colors.background,
                        boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1)`,
                    }}
                >
                    <Text sx={{ fontWeight: "bold", color: colors.text }}>
                        Name: {submission.name}
                    </Text>
                    <Text sx={{ fontWeight: "bold", color: colors.text }}>
                        Email: {submission.email}
                    </Text>
                    <Text sx={{ fontWeight: "bold", color: colors.text }}>
                        Message: {submission.message}
                    </Text>
                </Box>
            ))}
        </Box>
    );
};

export default Submissions;
