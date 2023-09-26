const supabase = require('../../database/supabaseClient');

async function getAllParks() {
    try {
        const { data, error } = await supabase
            .from('parks')
            .select('*');  // '*' denotes selecting all columns

        if (error) {
            throw error;
        }

        return data;
    } catch (err) {
        console.error('Error fetching parks:', err);
        return null;
    }
}

async function getAllEntities() {
    try {
        const { data, error } = await supabase
            .from('entities')
            .select('*');  // '*' denotes selecting all columns

        if (error) {
            throw error;
        }

        return data;
    } catch (err) {
        console.error('Error fetching entities:', err);
        return null;
    }
}

async function upsertEntity(entity) {

   console.log(entity)
    try {
        const { data, error } = await supabase
            .from('entities')
            .upsert({
                id: entity.id,
                name: entity.name,
                type: entity.type,
                park_id: entity.park_id,
                // Add other relevant fields here
            });

        if (error) {
            console.error("Error upserting entity:", error);
            return null;
        }

        return data;
    } catch (err) {
        console.error("Error in upsertEntity:", err);
    }
}
module.exports = {
    getAllParks,
    upsertEntity,
    getAllEntities
};