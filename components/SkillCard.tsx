import { View, Text, StyleSheet } from 'react-native'

interface SkillCardProps {
    emoji: string
    name: string
}

export function SkillCard({ emoji, name }: SkillCardProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>{emoji}</Text>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e5e7eb',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    emoji: {
        fontSize: 30,
        marginRight: 12,
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        color: '#374151',
    },
})