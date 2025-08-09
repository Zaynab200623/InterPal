"use server"
import { db } from "@/lib/prisma";
import {auth} from "@clerk/nextjs/server"
import { generateAIInsights } from "./dashboard";

    export async function updateUser(data){

    console.log("db object:", db); 
    console.log("db type:", typeof db); 

    const {userId} = await auth();
    if(!userId) throw new Error("Unauthorised");

    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId,
        },
    });

    if(!user) throw new Error("User not Found");

    try{
        //if industry exist
        const result = await db.$transaction(
            async(tx) => {
                let industryInsight = await tx.industryInsight.findUnique({
                    where: {
                        industry: data.industry,
                    }
                });

                if(!industryInsight){
                    const insights = await generateAIInsights(data.industry);
                    
                        industryInsight = await db.industryInsight.create({
                          data: {
                            industry: data.industry,
                            ...insights,
                            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                          },
                        });
                }//demandLevel: "MEDIUM",
                const updatedUser = await tx.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        industry: data.industry,
                        experience: data.experience,
                        bio: data.bio,
                        skills: data.skills,
                    }
                })

                return {updatedUser, industryInsight}; // Fixed: was "updateUser"
            },

            {
                timeout: 10000,
            }
        );
        return {success: true, ...result};
    }
    catch(error){
        console.log("Error updating user and industry:", error.message);
        throw new Error("Failed to update profile: " + error.message); // Added colon for better formatting
    }
}

export async function getUserOnboardingStatus() {
    const {userId} = await auth();
    if(!userId) throw new Error("Unauthorised");

    try{
        const user = await db.user.findUnique({
            where: {
                clerkUserId: userId,
            },
            select: {
                industry: true,
            },
        });

        if(!user) throw new Error("User not Found");

        return{
            isOnboarded: !!user?.industry,
        };
    }catch(error){
        console.error("Error checking status: ", error.message);
        throw new Error("Failed to check onboarding status");
    }
}
    

