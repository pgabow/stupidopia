import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const prompt = await Prompt.findById(params.id).populate("creator")
        if (!prompt) return new Response("Псто не найден", { status: 404 });

        return new Response(JSON.stringify(prompt), { status: 200 })

    } catch (error) {
        return new Response("Сервак почему-то лег. Зайдите позднее...", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { prompt, tag } = await request.json();

    try {
        await connectToDB();

        // Посик пста по ИД
        const existingPrompt = await Prompt.findById(params.id);

        if (!existingPrompt) {
            return new Response("Псто не найден", { status: 404 });
        }

        // Update prompt с новыми данными
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response("Псто удачно обновлен", { status: 200 });
    } catch (error) {
        return new Response("Ошибка обновления пста", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // поиск по ИД и удаление пста
        await Prompt.findByIdAndRemove(params.id);

        return new Response("Псто удачно удален", { status: 200 });
    } catch (error) {
        return new Response('Ошибка удаления пста', { status: 500 })
    }
};
