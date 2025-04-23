'use server';
/**
 * @fileOverview An AI agent that summarizes a project for a viewer, tailoring the summary to the viewer's profession.
 *
 * - summarizeProjectForViewer - A function that handles the project summary generation.
 * - SummarizeProjectForViewerInput - The input type for the summarizeProjectForViewer function.
 * - SummarizeProjectForViewerOutput - The return type for the summarizeProjectForViewer function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const SummarizeProjectForViewerInputSchema = z.object({
  projectDescription: z.string().describe('The description of the project.'),
  viewerProfession: z.string().describe('The profession of the viewer.'),
  relevantSkills: z.array(z.string()).describe('The skills relevant to the project.'),
});
export type SummarizeProjectForViewerInput = z.infer<
  typeof SummarizeProjectForViewerInputSchema
>;

const SummarizeProjectForViewerOutputSchema = z.object({
  summary: z.string().describe('A personalized summary of the project.'),
});
export type SummarizeProjectForViewerOutput = z.infer<
  typeof SummarizeProjectForViewerOutputSchema
>;

export async function summarizeProjectForViewer(
  input: SummarizeProjectForViewerInput
): Promise<SummarizeProjectForViewerOutput> {
  return summarizeProjectForViewerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeProjectForViewerPrompt',
  input: {
    schema: z.object({
      projectDescription: z.string().describe('The description of the project.'),
      viewerProfession: z.string().describe('The profession of the viewer.'),
      relevantSkills: z.array(z.string()).describe('The skills relevant to the project.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('A personalized summary of the project.'),
    }),
  },
  prompt: `You are an AI assistant that generates personalized summaries of projects for viewers, tailoring the summary to the viewer's profession.

  Project Description: {{{projectDescription}}}
  Viewer Profession: {{{viewerProfession}}}
  Relevant Skills: {{#each relevantSkills}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  Generate a summary of the project that highlights the aspects most relevant to the viewer's profession. Include specific examples of the listed skills used.
  `,
});

const summarizeProjectForViewerFlow = ai.defineFlow<
  typeof SummarizeProjectForViewerInputSchema,
  typeof SummarizeProjectForViewerOutputSchema
>(
  {
    name: 'summarizeProjectForViewerFlow',
    inputSchema: SummarizeProjectForViewerInputSchema,
    outputSchema: SummarizeProjectForViewerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
