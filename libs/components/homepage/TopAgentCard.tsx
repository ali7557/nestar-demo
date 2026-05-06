import React from "react";
import { Stack, Box, Typography } from "@mui/material";

const TopAgentCard = () => {
    return (
        <Stack className="top-agent-card">
            <Box
                className={"agent-img"}
                style={{
                    // Let's use a placeholder or an agent-specific image path
                    backgroundImage: `url("/img/agents/agent1.webp")`,
                    width: "100%",
                    height: "250px",
                    backgroundSize: "cover",
                    borderRadius: "12px"
                }}
            />
            <Box className={"agent-info"} sx={{ mt: 2, textAlign: "center" }}>
                <strong className={"name"}>James Caulfield</strong>
                <Typography className={"position"} variant="body2" color="text.secondary">
                    Real Estate Agent
                </Typography>
            </Box>
        </Stack>
    );
};

export default TopAgentCard;