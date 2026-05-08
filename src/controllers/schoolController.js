// src/controllers/schoolController.js: Handler functions for addSchool and listSchools endpoints

const db = require('../config/db');
const haversine = require('../utils/haversine');

// POST /addSchool
exports.addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  // Validation
  if (!name || typeof name !== 'string' || !name.trim())
    return res.status(400).json({ error: 'name is required' });
  if (!address || typeof address !== 'string' || !address.trim())
    return res.status(400).json({ error: 'address is required' });
  if (latitude == null || isNaN(latitude) || latitude < -90 || latitude > 90)
    return res.status(400).json({ error: 'latitude must be -90 to 90' });
  if (longitude == null || isNaN(longitude) || longitude < -180 || longitude > 180)
    return res.status(400).json({ error: 'longitude must be -180 to 180' });

  const [result] = await db.execute(
    'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
    [name.trim(), address.trim(), latitude, longitude]
  );
  res.status(201).json({ message: 'School added', id: result.insertId });
};

// GET /listSchools
exports.listSchools = async (req, res) => {
  const { latitude, longitude } = req.query;

  if (latitude == null || isNaN(latitude))
    return res.status(400).json({ error: 'latitude query param required' });
  if (longitude == null || isNaN(longitude))
    return res.status(400).json({ error: 'longitude query param required' });

  const [schools] = await db.execute('SELECT * FROM schools');

  const sorted = schools
    .map(s => ({
      ...s,
      distance_km: +haversine(+latitude, +longitude, s.latitude, s.longitude).toFixed(2)
    }))
    .sort((a, b) => a.distance_km - b.distance_km);

  res.json(sorted);
};
